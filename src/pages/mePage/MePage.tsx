// comps
import { Loader } from "../../comps/loader/Loader";

// hooks
import { useMe } from "../../hooks/useMe"

// css
import styles from './mePage.module.css';

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
        <>
            {data ? (
                <div className={styles.wrap}>   
                    <h1 className={styles.title}>
                        My page
                    </h1>
                    <div className={styles.inner}>
                        <div className={styles.imgWrap}>
                            <img 
                                className={styles.img}
                                src={data.image}
                                alt={''}
                            />
                        </div>
                        <div className={styles.group}>
                            <h2 className={styles.subTitle}>
                                Username: <span className={styles.value}>{data.username}</span>
                            </h2>
                        </div>
                        <div className={styles.group}>
                            <h2 className={styles.subTitle}>
                                E-mail: <span className={styles.value}>{data.email}</span>
                            </h2>
                        </div>
                        <div className={styles.group}>
                            <h2 className={styles.subTitle}>
                                First name: <span className={styles.value}>{data.firstName}</span>
                            </h2>
                        </div>
                        <div className={styles.group}>
                            <h2 className={styles.subTitle}>
                                Last name: <span className={styles.value}>{data.lastName}</span>
                            </h2>
                        </div>
                        <div className={styles.group}>
                            <h2 className={styles.subTitle}>
                                Gender: <span className={styles.value}>{data.gender}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
        </>
    )
}