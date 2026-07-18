import Container from "../common/Container";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">
          <p>© {year} Kakul Agrawal. All rights reserved.</p>

          <p>Built with React, Tailwind CSS & ❤️</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
