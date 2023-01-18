import React, { InputHTMLAttributes, ReactNode } from "react";
import { FieldError, FieldErrorsImpl } from "react-hook-form";

export interface IInputFieldProps {
    placeholder: string;
    error?: FieldError | undefined;
}

type TypeInputFieldProps = InputHTMLAttributes<HTMLInputElement> & IInputFieldProps

export interface IInputField extends TypeInputFieldProps{}