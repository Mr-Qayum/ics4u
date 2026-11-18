import { type ReactNode } from 'react'

type ModalProps = {
    onClick: () => void;
    children: ReactNode;
}

export const Modal = ({ onClick, children }: ModalProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md" onClick={onClick}>
            <div className="h-[50vh] w-full max-w-6xl rounded-2xl border border-gray-800 bg-gray-950" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
