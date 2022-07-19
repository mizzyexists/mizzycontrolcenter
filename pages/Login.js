/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { useModals } from '@mantine/modals';
import Head from 'next/head'




const Login = () => {

    const { user, isLoading } = useUser();
    const passcodeInput = useRef(null);
    const [enteredPasscode, setEnteredPasscode] = useState('');
    const router = useRouter()
    const modals = useModals();

    useEffect(() => {
        if (passcodeInput.current) {
            passcodeInput.current.focus();
        }
    }, [isLoading, enteredPasscode])

    const handlePasscode = (e) => {
        e.preventDefault();
        switch (enteredPasscode) {
            case 'LOGIN':
                router.push('/api/auth/login');
                break;

            case 'HELLO':
                giveResponse("HELLO USER");
                break;

            case 'BLACKFLAG':
                giveResponse("SELF DESTRUCT SEQUENCE \nINITIATED", 3000);
                setTimeout(() => {
                    let clearState = '';
                    setEnteredPasscode(clearState);
                    const response = "SELF DESTRUCTING IN\n";
                    let seconds = 6;
                    let interval = setInterval(() => {
                        seconds--;
                        setEnteredPasscode(response + seconds);
                        if (seconds == 0) {
                            clearInterval(interval);
                            setEnteredPasscode("BOOM :P");
                            setTimeout(() => { giveResponse('NOTHING ACTUALLY BLEW UP\nYET...', 3000) }, 2000);
                        }
                    }, 1000);
                }, 6000);
                break;

            case 'WHO ARE YOU?':
                giveResponse("I AM MORPHEUS\nMIZZY CREATED ME TO ASSIST HIM\nWITH SPECIFIC TASKS", 3500);
                break;

            case 'HELP':
                giveResponse("I'M SORRY\nIF YOU ARE UNFAMILIAR WITH THIS TERMINAL\nYOU ARE NOT AUTHORIZED TO USE IT", 3000);
                break;

            default:
                giveResponse("INVALID COMMAND", 1000);
                break;
        }
    }

        const giveResponse = (aiResponse, time = 2000) => {
            let clearState = '';
            setEnteredPasscode(clearState);
            const response = aiResponse
            let responseArray = response.split('');
            let responseArrayLength = responseArray.length;
            let i = 0;
            let interval = setInterval(() => {
                setEnteredPasscode(clearState + responseArray[i]);
                clearState = clearState + responseArray[i];
                i++;
                if (i == responseArrayLength) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setEnteredPasscode('');
                    }
                        , time);
                }
            }
                , 120);
        }

        return (
            <div className="input-screen">
                <Head>
                    <title>Morpheus - Terminal</title>
                </Head>
                {/* <h1><img src="/MizzyLogoNew.png" width='60px' alt='Morpheus'/></h1> */}
                <h1>^</h1>
                <form>
                    {enteredPasscode == '' ? (
                        <textarea
                            className='blink'
                            type="text"
                            value={enteredPasscode}
                            onChange={(e) => setEnteredPasscode(e.target.value.toUpperCase())}
                            onKeyPress={(e) => { if (e.key === 'Enter') { handlePasscode(e) } }}
                            autoFocus
                            spellCheck="false"
                            ref={passcodeInput}
                            placeholder="|"
                        />
                    ) : (
                        <textarea
                            type="text"
                            value={enteredPasscode}
                            onChange={(e) => setEnteredPasscode(e.target.value.toUpperCase())}
                            onKeyPress={(e) => { if (e.key === 'Enter') { handlePasscode(e) } }}
                            autoFocus
                            spellCheck="false"
                            ref={passcodeInput}
                            placeholder="|"
                        />
                    )}
                </form>
            </div>
        )
    }

    export default Login;