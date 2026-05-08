import { Link } from "react-router-dom";
import { CTAButton } from "@/components/site/CTAButton";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/site/SEO";

const NotFound = () => (
  <>
    <SEO
      title="Pagina nao encontrada | Rocha Marketing"
      description="A pagina que voce tentou acessar nao foi encontrada."
      path="/404"
      noindex
    />
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-display text-[5rem] font-extrabold leading-none text-gradient sm:text-[6.5rem] md:text-[8rem]">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-muted-foreground">A rota que você procurou não existe ou foi movida.</p>
      <Link to="/" className="mt-8">
        <CTAButton variant="primary"><ArrowLeft className="h-4 w-4" /> Voltar à home</CTAButton>
      </Link>
    </section>
  </>
);

export default NotFound;
