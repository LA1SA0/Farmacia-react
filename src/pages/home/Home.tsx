import farmaciaImg from '../../assets/farmacia.svg';

function Home() {
    return (
        <>
           <div className="bg-gray-50 flex justify-center">
                <div className='container grid grid-cols-2 text-blue-950'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                           FarmaGen</h2>
                        <p className='text-xl font-bold'>Mais que medicamentos, cuidado genuíno.</p>
                    </div>
                    

                        <div className="flex justify-center ">
                        <img
                            src={farmaciaImg}
                            alt="Imagem da Página Home"
                            width="400px"
                        />
                        </div>

                </div>
            </div>
        </>
    )
}

export default Home