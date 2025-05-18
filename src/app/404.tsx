export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
            <p className="text-center max-w-md mb-6">
                Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
            <a
                href="/"
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition-colors duration-300"
            >
                Voltar para o início
            </a>
        </div>
    );
}
