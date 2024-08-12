import { Loader } from "../../comps/loader/Loader";
import { useMe } from "../../hooks/useMe"

export function MePage() {
    const { data, error, isPending } = useMe();

    if (isPending) {
        return (
            <Loader />
        )
    }

    if (error) {
        return (
            <div>
                <h1>
                    Error
                </h1>
                <p>
                    {error}
                </p>
            </div>
        )
    }
    
    return (
        <div>
            {data ? (
                <>   
                    <h1>
                        My page
                    </h1>
                    <div>
                        <div>
                            <img 
                                src={data.image}
                                alt={''}
                            />
                        </div>
                        <div>
                            <h2>
                                Username: <span>{data.username}</span>
                            </h2>
                        </div>
                        <div>
                            <h2>
                                E-mail: <span>{data.email}</span>
                            </h2>
                        </div>
                        <div>
                            <h2>
                                First name: <span>{data.firstName}</span>
                            </h2>
                        </div>
                        <div>
                            <h2>
                                Last name: <span>{data.lastName}</span>
                            </h2>
                        </div>
                        <div>
                            <h2>
                                Gender: <span>{data.gender}</span>
                            </h2>
                        </div>
                    </div>
                </>
            ) : (
                null
            )}
        </div>
    )
}