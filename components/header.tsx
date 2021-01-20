import Head from 'next/head'

export function header(){
    return (
        <Head>
            <header className="border-b-2 px-16 bg-white flex flex-wrap items-center py-2 bg-gray-100">
                <div className="flex-1 flex justify-between items-center">
                    <a className="text-3xl font-bold" href="#">
                        ksvls
                    </a>
                </div>
                <div className="hidden md:flex md:items-center md:w-auto" id="menu">
                    <nav>
                        <ul className="flex items-center justify-between text-base text-gray-700 pt-0">
                            <li><a className="p-4 block border-b-2 border-transparent hover:border-indigo-400" href="#">Articles</a></li>
                            <li><a className="p-4 block border-b-2 border-transparent hover:border-indigo-400" href="#">Subject Matter</a></li>
                            <li><a className="p-4 block border-b-2 border-transparent hover:border-indigo-400" href="#">API Documentation</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="md:hidden lg:hidden flex items-center w-auto" id="menu-minimal">
                    <div className="flex items-center justify-between text-base text-gray-700 pt-0">
                        <a href="#" className="p-4 block border-b-2 border-transparent hover:border-indigo-400">Articles</a>
                        <a href="#" className="p-4 block border-b-2 border-transparent hover:border-indigo-400">Subject Matter</a>
                    </div>
                </div>
            </header>
        </Head>
    )
}

