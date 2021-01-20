import dynamic from 'next/dynamic'

const SiteHeader = dynamic(()=>import('../components/header').then(mod=>mod.header))

export default function homepage(){
    return (
        <div>
            <SiteHeader/>
            <h1 className="text-indigo-700">Not Done Yet</h1>
        </div>
    )
}