"use client"
import { ReactNode, useState } from "react"
import { Modal } from "./modal"

type ModalProps = {
    buttonText: string,
    icon?: ReactNode,
    children: ReactNode
}
export function ModalButton({ buttonText, icon, children }: ModalProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 bg-roxo/90 hover:bg-roxo flex items-center gap-1  text-white rounded"
            >
                {icon} {buttonText}
            </button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {children}
            </Modal>
        </>
    )
}