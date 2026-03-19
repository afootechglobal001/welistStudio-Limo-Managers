"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDown, Loader2, Search, X } from "lucide-react";
import { useState, useMemo, useEffect, forwardRef, useRef } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type MessageType = "info" | "success" | "warning" | "error";

type BaseProps<TFieldValues extends FieldValues> = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "name" | "size"
> & {
  id?: string;
  label?: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  isLoading?: boolean;
  searchPlaceholder?: string;
  isOperator?: boolean;
  message?: string;
  messageType?: MessageType;
  zindex?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  clearable?: boolean;
  required?: boolean; // ✅ added
};

interface OptionWithoutData {
  value: string;
  label: string;
  data?: never;
}
interface OptionWithData<T> {
  value: string;
  label: string;
  data: T;
}

interface PropsWithRender<
  TFieldValues extends FieldValues,
  TOption,
> extends BaseProps<TFieldValues> {
  renderOption: (opt: TOption, isSelected: boolean) => React.ReactNode;
  options: OptionWithData<TOption>[];
  getOptionLabel?: never;
  getOptionValue?: never;
}
interface PropsWithoutRender<
  TFieldValues extends FieldValues,
> extends BaseProps<TFieldValues> {
  renderOption?: undefined;
  options: OptionWithoutData[];
  getOptionLabel?: (opt: OptionWithoutData) => string;
  getOptionValue?: (opt: OptionWithoutData) => string;
}

const getMessageColor = (type: MessageType) => {
  switch (type) {
    case "success":
      return "text-green-600 border-green-500";
    case "warning":
      return "text-yellow-600 border-yellow-500";
    case "error":
      return "text-red-600 border-red-500";
    case "info":
      return "text-blue-600 border-blue-500";
    default:
      return "text-gray-500 border-black/10";
  }
};

function FormSelectInner<TFieldValues extends FieldValues, TOption = unknown>(
  props: FormSelectProps<TFieldValues, TOption>,
  ref: React.ForwardedRef<HTMLSelectElement>,
) {
  const {
    id,
    label,
    isOperator = false,
    message,
    messageType = "error",
    options = [],
    name,
    control,
    renderOption,
    isLoading = false,
    searchPlaceholder = "Search...",
    className,
    placeholder,
    disabled = false,
    size = "md",
    clearable = true,
    required = false, // ✅ added
    ...rest
  } = props;

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false),
  );

  const borderClass = message ? getMessageColor(messageType) : "";

  const filteredOptions = useMemo(() => {
    return options.filter((opt) =>
      (opt.label ?? "").toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, options]);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col w-full relative" ref={selectRef}>
          <div
            className={`relative w-full 
              rounded-md bg-(--primary-color)
              transition-all duration-200
              ${!isOperator ? "border-2 border-gray-500" : ""}
              ${
                error ? getMessageColor("error") : borderClass
              } ${className ?? ""}
              ${
                error || message
                  ? "border-red-500"
                  : "focus-within:border-(--secondary-color)"
              }
              focus-within:ring-0
              focus-within:bg-(--primary-color)
              focus-within:border-2
            `}
          >
            {/* ✅ Label */}
            {label && (
              <label
                htmlFor={id}
                className={`absolute -top-2.5 bg-(--primary-color) left-3 
                  text-(--text-color) duration-100 transform text-[13px] px-2
                `}
              >
                {label}
                {required && (
                  <span
                    className={`ml-1 ${
                      error || message ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    *
                  </span>
                )}
              </label>
            )}

            {/* ✅ Trigger */}
            <button
              type="button"
              className={`w-full text-left ${
                size === "sm" ? "p-3 py-3 text-sm" : "p-4 py-5 text-sm"
              } text-white bg-(--primary-color) rounded-lg border-0 focus:outline-none flex justify-between items-center ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={!disabled ? () => setIsOpen((prev) => !prev) : undefined}
            >
              <span className={`${!value ? "text-gray-400" : ""}`}>
                {options.find((opt) => opt.value === value)?.label ||
                  placeholder}
              </span>

              <div className="flex items-center gap-2">
                {clearable && value && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange("");
                      setQuery("");
                    }}
                    className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
                  >
                    <X className="w-3 h-3 text-gray-500" />
                  </div>
                )}

                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* ✅ Dropdown */}
            {isOpen && (
              <div className="absolute z-50 top-full left-0 w-full bg-(--primary-color) border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-auto">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={searchPlaceholder}
                  className={`w-full ${
                    size === "sm" ? "p-2 text-xs" : "p-2 text-sm"
                  } border-b border-gray-200 outline-none`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  disabled={isLoading || disabled}
                />

                <ul className="max-h-48 overflow-y-auto">
                  {isLoading ? (
                    <li className="p-2 text-gray-500 text-sm flex justify-center items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Loading...
                    </li>
                  ) : filteredOptions.length > 0 ? (
                    filteredOptions.map((opt) => (
                      <li
                        key={opt.value}
                        className={`p-2 px-3 cursor-pointer ${
                          value === opt.value
                            ? "bg-white/30 font-medium"
                            : "hover:bg-white/20"
                        }`}
                        onClick={() => {
                          onChange(opt.value);
                          setIsOpen(false);
                          setQuery("");
                        }}
                      >
                        {renderOption && opt.data
                          ? renderOption(opt.data, value === opt.value)
                          : opt.label}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500 text-sm flex justify-center items-center gap-2">
                      <Search className="w-4 h-4" />
                      No results found
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* ✅ Message */}
          {(error?.message || message) && (
            <p
              className={`mt-1 text-xs ${
                error ? getMessageColor("error") : getMessageColor(messageType)
              }`}
            >
              {error?.message || message}
            </p>
          )}

          {/* ✅ Hidden select */}
          <select
            id={id}
            ref={ref}
            value={value}
            onChange={onChange}
            required={required} // ✅ important
            className="hidden"
            disabled={disabled}
            {...rest}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  );
}

type FormSelectProps<TFieldValues extends FieldValues, TOption = unknown> =
  | PropsWithRender<TFieldValues, TOption>
  | PropsWithoutRender<TFieldValues>;

export const FormSelect = forwardRef(FormSelectInner) as <
  TFieldValues extends FieldValues,
  TOption = unknown,
>(
  props: FormSelectProps<TFieldValues, TOption> & {
    ref?: React.ForwardedRef<HTMLSelectElement>;
  },
) => ReturnType<typeof FormSelectInner>;
