import { EditorProps } from "draft-js";
import React, { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import { FieldError, FieldErrorsImpl } from "react-hook-form";

export interface IInputFieldProps {
    placeholder: string;
    error?: FieldError | undefined;
}

type TypeInputFieldProps = InputHTMLAttributes<HTMLInputElement> & IInputFieldProps

export interface IInputField extends TypeInputFieldProps{}

type TypeEditorFieldProps = IInputFieldProps & EditorProps

export interface IFieldTextEditor extends Omit<TypeEditorFieldProps,'editorState'>{
    onChange: (...event: any[]) => void
    value: string

}

export interface IUploadField {
    folder?: string
    value: string
    onChange: (...event: any[]) => void
    placeholder?: string
    error?: FieldError
    style?: CSSProperties
    isNoImage?: boolean
}