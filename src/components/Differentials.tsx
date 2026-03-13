import { CheckCircle2, XCircle } from 'lucide-react';

export default function Differentials() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Por que somos diferentes?</h2>
          <p className="mt-4 text-lg text-slate-300">Compare e entenda o valor da nossa solução demonstrativa.</p>
        </div>
        
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Solução Comum */}
          <div className="bg-slate-800 rounded-2xl p-8 ring-1 ring-slate-700">
            <h3 className="text-xl font-semibold mb-6 text-slate-300">Soluções Comuns</h3>
            <ul className="space-y-4">
              {[
                'Teoria sem prática',
                'Foco apenas em métricas de vaidade',
                'Suporte inexistente ou demorado',
                'Estratégias desatualizadas',
                'Promessas de ganhos irreais'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-400 mr-3 shrink-0" />
                  <span className="text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Turbo Conversão Pro */}
          <div className="bg-indigo-600 rounded-2xl p-8 ring-1 ring-indigo-500 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-10">
              <CheckCircle2 className="w-40 h-40" />
            </div>
            <h3 className="text-xl font-semibold mb-6 text-white">Turbo Conversão Pro</h3>
            <ul className="space-y-4 relative z-10">
              {[
                'Templates prontos para uso',
                'Foco em ROI e vendas reais',
                'Comunidade e suporte ativo (fictício)',
                'Método validado no mercado atual',
                'Expectativas alinhadas e transparentes'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-indigo-200 mr-3 shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
