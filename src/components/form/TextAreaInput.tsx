"use client";

import { forwardRef } from "react";

export type MessageType = "info" | "success" | "warning" | "error";

interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isOperator?: boolean;
  message?: string;
  messageType?: MessageType;
  required?: boolean;
}

export const getMessageColor = (type: MessageType) => {
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

const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  (
    {
      id,
      label,
      placeholder,
      isOperator = false,
      message,
      messageType = "error",
      className,
      rows = 2,
      disabled,
      required = false,
      ...rest
    },
    ref,
  ) => {
    const borderClass = message ? getMessageColor(messageType) : "";

    return (
      <fieldset className="flex flex-col w-full">
        <div
          className={`relative w-full 
            rounded-md bg-(--primary-color)
            transition-all duration-200
            ${!isOperator ? "border-2 border-gray-500" : ""}
            ${borderClass} ${className ?? ""}
            ${
              message
                ? "border-red-500"
                : "focus-within:border-(--secondary-color)"
            }
            focus-within:ring-0
            focus-within:bg-(--primary-color)
            focus-within:border-2
          `}
        >
          <textarea
            id={id}
            required={required}
            placeholder={label}
            autoComplete="off"
            aria-invalid={message ? "true" : "false"}
            aria-describedby={message ? `${id}-message` : undefined}
            className={`block p-4 w-full text-xl bg-(--primary-color) text-white 
              autofill:bg-inherit! active:bg-transparent! placeholder-transparent 
              rounded-lg border-0 focus:outline-none peer ${
                disabled ? "bg-gray-100!" : ""
              }`}
            style={{ fontStyle: "normal", fontWeight: 400 }}
            ref={ref}
            rows={rows}
            disabled={disabled}
            {...rest}
          />

          {label && (
            <label
              htmlFor={id}
              className={`absolute -top-2.5 bg-(--primary-color) left-3 
                text-(--text-color) duration-100 transform text-[13px] px-2 flex items-center gap-2
                ${
                  !placeholder &&
                  "peer-placeholder-shown:top-5 peer-focus:-top-2.5 peer-focus:px-2"
                }
                ${!message ? "peer-focus:text-(--secondary-color)" : ""}
                ${message ? borderClass : ""}
              `}
            >
              <span>{label}</span>
              {required && <span className="text-red-500">*</span>}
            </label>
          )}
        </div>

        {message && (
          <p
            id={`${id}-message`}
            className={`mt-1 text-xs ${getMessageColor(messageType)}`}
            role="alert"
          >
            {message}
          </p>
        )}
      </fieldset>
    );
  },
);

TextAreaInput.displayName = "TextAreaInput";

export { TextAreaInput };
