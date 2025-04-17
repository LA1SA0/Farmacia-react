import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
            <div className="container flex justify-between items-center text-lg px-4">
                <Link to='/' className="text-2xl font-bold">FarmaGen</Link>

                <div className='flex gap-4'>
                    <Link to='/listapostagens' className='hover:underline'>Listar Temas</Link>
                    <Link to='/cadastrartema' className='hover:underline'>Cadastrar Tema</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

