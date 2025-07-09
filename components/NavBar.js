import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          PontoApp
        </Link>
        
        {/* MODIFICAÇÃO AQUI */}
        {/* Por padrão (mobile), os links estão escondidos: "hidden" */}
        {/* A partir de telas médias ("md"), eles viram um bloco flexível: "md:flex" */}
        <div className="hidden md:flex items-center">
          <Link href="/login" className="hover:bg-gray-700 p-2 rounded">
            Login
          </Link>
          <Link href="/registrar" className="hover:bg-gray-700 p-2 rounded ml-2">
            Registrar
          </Link>
        </div>

        {/* Botão Hamburger que SÓ aparece em telas pequenas */}
        {/* Ele aparece por padrão, mas fica escondido ("md:hidden") em telas médias ou maiores */}
        <div className="md:hidden">
            <button className="text-white">
                {/* Ícone de Hamburger (exemplo) */}
                {/*la ele */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>

      </div>
    </nav>
  );
}