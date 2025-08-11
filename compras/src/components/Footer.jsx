export default function Footer(){
  return (
    <footer className="py-4 mt-5 border-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <small className="text-muted">© {new Date().getFullYear()} ONLINE SHOP</small>
        <div className="d-flex gap-3">
          <a href="#" className="text-decoration-none">Privacidad</a>
          <a href="#" className="text-decoration-none">Términos</a>
          <a href="#" className="text-decoration-none">Soporte</a>
        </div>
      </div>
    </footer>
  );
}
