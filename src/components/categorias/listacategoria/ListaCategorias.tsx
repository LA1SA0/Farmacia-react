import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Categorias from "../../../models/Categoria";
import CardCategorias from "../cardcategoria/CardCategorias"
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function ListaCategorias() {
    
    const [categorias, setCategorias] = useState<Categorias[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {});
        } catch (error: any) {
            ToastAlerta("Erro ao buscar categorias", "erro")
        }
    }
    

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
        {categorias.length === 0 && (
            <div className="flex justify-center items-center min-h-screen">
            <ClipLoader
                color="green"  // Cor que pode remeter ao tema de farmácia
                loading={true}
                size={50}       // Tamanho do spinner
            />
        </div>
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                       {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;