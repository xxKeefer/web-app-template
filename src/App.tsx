import * as styles from '~/style/main.css';

import { sprinkles } from './style/utils.css';

function App() {
    return (
        <div className={styles.root}>
            <div
                className={sprinkles({
                    display: 'flex',
                    flexDirection: 'column',
                    placeItems: 'center',
                    borderColor: 'black',
                    borderWidth: 'sm',
                    borderRadius: 'md',
                    borderStyle: 'solid',
                    padding: 'xxl',
                    margin: 'xxl',
                })}
            >
                <h1
                    className={sprinkles({
                        color: 'black',
                        font: 'xxl',
                        paddingX: 'md',
                    })}
                >
                    Hello World
                </h1>
                <p
                    className={sprinkles({
                        color: 'black',
                        font: 'md',
                        paddingX: 'md',
                    })}
                >
                    lorem ipsum
                </p>
                <p
                    className={sprinkles({
                        color: 'black',
                        font: 'sm',
                        paddingX: 'md',
                    })}
                >
                    lorem ipsum
                </p>
                <p
                    className={sprinkles({
                        color: 'black',
                        font: 'xs',
                        paddingX: 'md',
                    })}
                >
                    lorem ipsum
                </p>
                <p
                    className={sprinkles({
                        color: 'black',
                        font: 'lg',
                        paddingX: 'md',
                    })}
                >
                    lorem ipsum
                </p>
            </div>
        </div>
    );
}

export default App;
