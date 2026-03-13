export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Turbo Conversão Pro. Todos os direitos reservados.
          </p>
          <p className="text-center text-xs leading-5 text-slate-500 mt-2">
            Aviso: Esta é uma página de demonstração. Nenhum produto real está sendo vendido aqui.
          </p>
        </div>
      </div>
    </footer>
  );
}
