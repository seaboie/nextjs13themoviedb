export const metadata = {
    title: '',
    description: '',
}

interface WebLayoutProps {
    children: React.ReactNode
}

export default function WebLayout({children}: WebLayoutProps) {
    return (
        <div className="w-screen min-h-screen flex flex-col px-12">
            <div className="flex-grow ">
               {children}
            </div>
        </div>
    )
}