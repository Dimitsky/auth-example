export function MePage() {
    return (
        <div>
            <h1>
                My page
            </h1>
            <div>
                <div>
                    <img 
                        src={'/'}
                        alt={''}
                    />
                </div>
                <div>
                    <h2>
                        Username: <span>{}</span>
                    </h2>
                </div>
                <div>
                    <h2>
                        E-mail: <span>{}</span>
                    </h2>
                </div>
                <div>
                    <h2>
                        First name: <span>{}</span>
                    </h2>
                </div>
                <div>
                    <h2>
                        Last name: <span>{}</span>
                    </h2>
                </div>
                <div>
                    <h2>
                        Gender: <span>{}</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}