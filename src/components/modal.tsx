"use client"

import { CancelSquareIcon } from "hugeicons-react"
import { ReactNode } from "react"

type Props = {
    isOpen: boolean,
    children: ReactNode,
    onClose: () => void
}
export function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose()
    }

    return (
        <div
            id="wrapper"
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
            onClick={handleClose}
        >

            <div className="w-auto bg-white p-2 rounded-xl flex flex-col items-center justify-center">
                <button className="text-white text-xl place-self-end hover:bg-roxo/20 rounded-lg" onClick={onClose}>

                    <CancelSquareIcon className="size-6 text-roxo" />
                </button>
                <div className="bg-white p-2 rounded-xl">{children}</div>
            </div>
        </div>
    )
}
