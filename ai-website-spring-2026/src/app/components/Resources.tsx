type resourceProps = {
    resourceName: string
    href: string
}

function Resource({resourceName, href} : resourceProps) {
    return (
        <div className="p-4 rounded-[20px] border border-white/10 bg-black/40 backdrop-blur-sm w-fit">
            <a href={href} target="_blank" rel="noopener noreferrer"
                className="text-yellow-400 text-center hover:text-yellow-300 underline decoration-yellow-400/30 hover:decoration-yellow-300 transition-all font-medium">
                <p className="">{resourceName}</p>
            </a>
        </div>
    );
}

export default function Resources() {
    const resourceGroupHeaderStyle = "text-xl font-bold text-center text-yellow-400 uppercase tracking-wider pt-8 pb-3";
    const resourceGroupStyle = "flex flex-wrap flex-row items-center justify-center gap-2";

    return (
        <section className="py-20">
            <div className="p-10 rounded-[26px] border border-white/10 bg-blue-900/60 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-2 text-center text-white">Resources</h3>

                <h2 className={`${resourceGroupHeaderStyle}`}>Course Policies</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Course Missive" href="https://hackmd.io/eFzIAJmCTtW0fUGJ4w5xOg"/>
                </div>

                <h2 className={`${resourceGroupHeaderStyle}`}>General Resources</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Ed Discussion" href=""/>
                    <Resource resourceName="Github Overview" href=""/>
                    <Resource resourceName="Testing/Debugging Guide" href=""/>
                </div>

                <h2 className={`${resourceGroupHeaderStyle}`}>Python Guides</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Python Installation and Setup" href=""/>
                    <Resource resourceName="Python, NumPy, & Linear Algebra Guide" href=""/>
                    <Resource resourceName="NumPy Cheatsheet" href=""/>
                    <Resource resourceName="Python Style Guide" href=""/>
                </div>

                <h2 className={`${resourceGroupHeaderStyle}`}>Forms</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Course Onboarding Form" href=""/>
                </div>
            </div>
        </section>
    );
}