import Head from 'next/head'

export function header(){
    return (
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>

            <nav className="flex items-center bg-white p-3 flex-wrap border-b-2 bg-gray-100">
                <a href="#" className="p-2 mr-4 inline-flex items-center">
                    <span className="text-xl text-black font-bold tracking-wide">ksvls</span>
                </a>
                <button className="text-black inline-flex p-3 hover:bg-indigo-400 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
                    <i className="material-icons">menu</i>
                </button>
                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 border-b-2 border-transparent text-gray-700 items-center justify-center hover:border-indigo-400">
                            <span>Home</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 border-b-2 border-transparent text-gray-700 items-center justify-center hover:border-indigo-400">
                            <span>About</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 border-b-2 border-transparent text-gray-700 items-center justify-center hover:border-indigo-400" >
                            <span>Subject Matter</span>
                        </a>
                        <a href="#" className="lg:inline-flex lg:w-auto w-full px-3 py-2 border-b-2 border-transparent text-gray-700 items-center justify-center hover:border-indigo-400">
                            <span>API Documentation</span>
                        </a>
                    </div>
                </div>
            </nav>
            <script src="js/libs/jquery/3.5.0/jquery.min.js" crossOrigin="anonymous"></script>
            <script src="js/libs/navman.js"/>
        </Head>
    )
}

