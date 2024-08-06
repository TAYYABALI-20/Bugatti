import React, { useState, useEffect } from 'react';

//CSS File
import './styles.css';

const Bugatti = () => {

    const [isPathToGarageButtonClick, setIsPathToGarageButtonClick] = useState(false);

    const [isPathOfGarageCleared, setIsPathOfGarageCleared] = useState(false);

    const [isGasCapButtonClick, setIsGasCapButtonClick] = useState(false);

    const [isLockOpen, setIsLockOpen] = useState(false);

    const [isLeftHandClick, setIsLeftHandClick] = useState(false);

    const [isBugattiSymbolClick, setIsBugattiSymbolClick] = useState(false);

    const [isBugattiSideMirrorLightClick, setIsBugattiSideMirrorLightClick] = useState(false);

    const [isBugattiSideMirrorCameraClick, setIsBugattiSideMirrorCameraClick] = useState(Array(3).fill(false));

    const [isBugattiFrontLightClick, setIsBugattiFrontLightClick] = useState(false);

    const [isBugattiBackLightClick, setIsBugattiBackLightClick] = useState(false);

    const [isBugattiBumperLightClick, setIsBugattiBumperLightClick] = useState(false);

    const [isBugattiExhaustPipeClick, setIsBugattiExhaustPipeClick] = useState(Array(6).fill(false));

    const hoverDirections = 'hover-directions';

    const loadingLightOfLock0fPathOfGarage = 'loading-light-of-button-for-the-entrance-of-about-me';

    const handleLockOpen = () => {
        setIsLockOpen(prevState => !prevState)
        if (isPathOfGarageCleared) {
            setIsLockOpen(false);
        };
        if (!isLockOpen) {
            setIsBugattiFrontLightClick(false);
            setIsBugattiBumperLightClick(false);
            setIsBugattiBackLightClick(false);
            setIsBugattiSymbolClick(false);
            setIsBugattiSideMirrorLightClick(false);
            setIsBugattiExhaustPipeClick(Array(6).fill(false));
            setIsBugattiSideMirrorCameraClick(Array(3).fill(false));
        }
    };

    const handlePathToGarageButtonClick = () => {
        setIsPathToGarageButtonClick(prevState => !prevState);
        setIsPathOfGarageCleared(false);
        setIsLockOpen(false)
    };

    const handlePathOfGarageCleared = () => {
        setIsPathOfGarageCleared(prevState => !prevState);
        setIsPathToGarageButtonClick(false);
        if (!isLockOpen) {
            setIsPathOfGarageCleared(true);
        } else {
            setIsLockOpen(false);
        }
    };

    const handleLeftHandClick = () => {
        setIsLeftHandClick(prevState => !prevState);
    };

    const handleGasCapButtonClick = () => {
        setIsGasCapButtonClick(prevState => !prevState);
    };

    const handleBugattiSymbolClick = () => {
        setIsBugattiSymbolClick(prevState => !prevState);
    };

    const handleBugattiBumperLightClick = () => {
        setIsBugattiBumperLightClick(prevState => !prevState);
    };

    const handleBugattiFrontLightClick = () => {
        setIsBugattiFrontLightClick(prevState => !prevState);
    };

    const handleBugattiBackLightClick = () => {
        setIsBugattiBackLightClick(prevState => !prevState);
    };

    const handleBugattiSideMirrorCameraClick = (index, event) => {

        event.stopPropagation();

        setIsBugattiSideMirrorCameraClick((prevActiveCamera) => {
            const newActiveCamera = [...prevActiveCamera];
            newActiveCamera[index] = !newActiveCamera[index];
            return newActiveCamera
        });

    };

    const handleBugattiSideMirrorLightClick = () => {
        setIsBugattiSideMirrorLightClick(prevState => !prevState);
    };

    const handleBugattiExhaustPipeClick = (index) => {
        const reversedExplodedSmoke = 5 - index;
        setIsBugattiExhaustPipeClick(reversedExplodedSmoke)
    };

    return (

        <>

            <div

                className={
                    `
                                entrance-of-about-me
                                    ${isPathToGarageButtonClick && !isPathOfGarageCleared ?
                        'please-wait cleared' :
                        ''}
                            `
                }

            >

                <button
                    disabled={isLockOpen}
                    className={
                        `
                            keys-of-about-me
                                ${isPathToGarageButtonClick && !isPathOfGarageCleared && isLockOpen ?
                            'visible' : 'hidden'
                        }
                        `
                    }

                    onClick={handlePathOfGarageCleared}
                >

                    {
                        Array.from({ length: 9 }, (_, index) => (

                            <div
                                key={index}
                                className={
                                    `
                                        key-of-about-me
                                            ${isPathToGarageButtonClick && !isPathOfGarageCleared && isLockOpen ?
                                        'success' : 'failed'
                                    }
                                    `
                                }
                            />

                        ))
                    }

                </button>

                <div
                    className={
                        `
                            scene
                            ${isPathToGarageButtonClick && !isPathOfGarageCleared ?
                            'vanished' :
                            'returned'
                        }
                        `
                    }>

                    <div className="cube" id="ground">
                        <div className="container">
                            <div className="left" />
                            <div className="right" />
                            <div className="top" />
                            <div className="bottom" />
                            <div className="front" />
                            <div className="back" />
                        </div>
                    </div>

                    <div className="rocks">
                        <div className="cube" id="rock-1">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-2">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-3">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-4">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-5">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                    </div>

                    <div className="my-bodyguard">
                        <div className="head">
                            <div className="cube" id="head">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                            <div className="cube" id="neck">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                            <div className="cube" id="nose">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                            <div className="eyes">
                                <div className="cube" id="eye-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="eye-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                            <div className="hair">
                                <div className="cube" id="hair-top">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hair-center">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hair-center-back">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hair-back">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="cube" id="body">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                        </div>
                        <div className="legs">
                            <div className="leg-left">
                                <div className="cube" id="leg-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="foot-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                            <div className="leg-right">
                                <div className="cube" id="leg-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="foot-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="arms">
                            <div className="arm-left">
                                <div className="cube" id="arm-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="elbow-left">
                                    <div className="cube" id="arm-left-bottom">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                    <div className="cube" id="hand-left">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="arm-right">
                                <div className="cube" id="arm-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hand-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="light-saber">
                                    <div className="cube" id="light-saber">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                    <div className="cube" id="light-saber-bolster">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                    <div className="cube" id="light-saber-handle">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className='the-entrance-of-about-me'
                >

                    <button

                        type='button'

                        className={
                            `
                                button-for-the-entrance-of-about-me
                                ${isPathToGarageButtonClick && !isPathOfGarageCleared ?
                                'clicked allowing-the-user' :
                                'not-clicked not-allowing-the-user'
                            }
                            `
                        }

                        onClick={handlePathToGarageButtonClick}

                    >

                        <span>CLICK</span>

                        <div className='loading-lights-of-button-for-the-entrance-of-about-me'>

                            {
                                Array.from({ length: 12 }, (_, index) => (

                                    <div
                                        key={index}
                                        className=
                                        {
                                            isPathToGarageButtonClick && !isPathOfGarageCleared ?
                                                `${loadingLightOfLock0fPathOfGarage} lights-on` :
                                                `${loadingLightOfLock0fPathOfGarage} lights-off`
                                        }

                                    />

                                ))
                            }

                        </div>

                        <div className="hover-area">

                            {

                                Array.from({ length: 65 }, (_, i) => (

                                    <div
                                        className={hoverDirections}
                                        key={i} />

                                ))

                            }

                            <div className="icon-about-me">
                                <div className="roof roof-1" />
                                <div className="roof roof-2" />
                                <div className="roof-design roof-design-1" />
                                <div className="roof-design roof-design-2" />
                                <div className="roof-side roof-side-1" />
                                <div className="roof-side roof-side-2" />
                                <div className="roof-wall roof-wall-1" />
                                <div className="roof-wall roof-wall-2" />
                                <div className="wall wall-1" />
                                <div className="wall wall-2" />
                                <div className="wall wall-3" />
                                <div className="wall wall-4" />
                                <div className="door" />
                                <div className="floor" />
                            </div>

                        </div>

                    </button>

                </div>

                <div className='bugatti-garage-container'>

                    <div
                        className={`
                                    bugatti-garage
                                    ${isPathToGarageButtonClick && !isPathOfGarageCleared ?
                                'bugatti-garage-appeared' : 'bugatti-garage-disappeared'}
                                    ${isLockOpen ?
                                'open-the-garage-from-left open-the-garage-from-right' :
                                'close-the-garage-from-left close-the-garage-from-right'}
                                `}
                    >

                        <div className={`bugatti-text
                                ${isPathToGarageButtonClick && !isPathOfGarageCleared && isLockOpen ?
                                'bugatti-text-appeared' : 'bugatti-text-disappeared'
                            }
                            `}
                        >
                            <h1>BUGATTI.</h1>
                        </div>

                        <div
                            className={`
                                    bugatti-garage-open-system
                                    ${isLockOpen ? 'light-on moving-system-to-top' : 'light-off'}
                                `}
                        />

                        <div
                            className={`
                                    bugatti-garage-open-system-lock
                                    ${isLockOpen ? 'unlock' : 'lock'}
                                `}
                            onClick={handleLockOpen}
                        />

                    </div>

                    <div
                        className={`bugatti 
                                ${isPathToGarageButtonClick && !isPathOfGarageCleared && isLockOpen ?
                                'bugatti-arrived' : 'bugatti-not-arrived'}
                        `}
                    >

                        <div className='bugatti-spoiler-area'></div>

                        <div className='bugatti-roof-scoope'>

                            <div className='bugatti-roof-scoope-inside'></div>

                        </div>

                        <div className="bugatti-first-black-area">

                            <div className='bugatti-upper-part-inside'>

                                <div className='bugatti-upper-part-inside-holes'>

                                    <div className='bugatti-upper-part-inside-hole'></div>
                                    <div className='bugatti-upper-part-inside-hole'></div>
                                    <div className='bugatti-upper-part-inside-hole'></div>
                                    <div className='bugatti-upper-part-inside-hole'></div>
                                    <div className='bugatti-upper-part-inside-hole'></div>
                                    <div className='bugatti-upper-part-inside-hole'></div>
                                    <div className='bugatti-upper-part-inside-hole'></div>
                                    <div className='bugatti-upper-part-inside-hole'></div>

                                </div>

                            </div>

                        </div>

                        <div className='car-wiper' />

                        <div className="bugatti-front-mirror"></div>

                        <div className="bugatti-second-black-area"></div>

                        <div className="bugatti-second-black-area-2"></div>

                        <div className='bugatti-line-above-window-1' />

                        <div className='bugatti-line-above-window-2' />

                        <div className='bugatti-line-above-window-3' />

                        <div className='bugatti-line-above-window-4' />

                        <div className='bugatti-line-above-window-5' />

                        <div className='bugatti-line-above-window-6' />

                        <div className='bugatti-line-above-window-7' />

                        <div className='bugatti-window'></div>

                        <div className='bugatti-side-mirror'>

                            <div
                                onClick={handleBugattiSideMirrorLightClick}
                                className={`
                                            ${isBugattiSideMirrorLightClick ?
                                        'bugatti-side-mirror-inside bugatti-side-mirror-inside-light-on' :
                                        'bugatti-side-mirror-inside'
                                    }
                                    `}
                            >

                                <div
                                    className='bugatti-side-mirror-inside-cameras'>

                                    {Array.from({ length: 3 }, (_, index) => (

                                        <div

                                            key={index}
                                            onClick={(event) => handleBugattiSideMirrorCameraClick(index, event)}
                                            className={`bugatti-side-mirror-inside-camera
                                                ${isBugattiSideMirrorCameraClick[index] ?
                                                    'bugatti-side-mirror-inside-camera-on' : ''
                                                }
                                        `}

                                        />

                                    ))}

                                </div>

                            </div>

                        </div>

                        <div className="bugatti-third-black-area"></div>

                        <div className='bugatti-door'>

                            <div className='bugatti-door-left-line-1'></div>
                            <div className='bugatti-door-left-line-2'></div>

                            <div className='bugatti-door-right-line-1'></div>
                            <div className='bugatti-door-right-line-2'></div>
                            <div className='bugatti-door-right-line-3'></div>

                            <div className='bugatti-door-handle-holder'>
                                <div className='bugatti-door-handle'></div>
                            </div>

                        </div>

                        <div className="bugatti-fourth-black-area"></div>

                        <div className="bugatti-fifth-black-area"></div>

                        <div className="bugatti-sixth-black-area"></div>

                        <div className="bugatti-seventh-black-area"></div>

                        <div className='bugatti-logo' onClick={handleBugattiSymbolClick} />

                        <div className={`
                                    ${isBugattiSymbolClick ?
                                'bugatti-owner-name bugatti-owner-name-before bugatti-owner-name-after' :
                                'bugatti-owner-name'
                            }
                            `}
                        />

                        <div className='bugatti-front-light' />

                        <div onClick={handleBugattiFrontLightClick} className='bugatti-front-light-bulbs'>

                            {Array.from({ length: 4 }, (_, index) => (

                                <div

                                    key={index}

                                    className={`bugatti-front-light-bulb
                                        ${isBugattiFrontLightClick ?
                                            'bugatti-front-light-bulb-on' : ''
                                        }
                                    `}

                                />

                            ))}

                        </div>

                        <div className='bugatti-front-light-bulbs-smoke-area'>

                            <div className="bugatti-front-light-bulbs-smokes">

                                {Array.from({ length: 10 }, (_, index) => (

                                    <div

                                        key={index}

                                        className={`bugatti-front-light-bulbs-smoke
                                                ${isBugattiFrontLightClick ?
                                                'bugatti-front-light-bulbs-smoke-blows' : ''
                                            }
                                            `}

                                    />

                                ))}

                                {Array.from({ length: 8 }, (_, index) => (

                                    <div

                                        key={index}

                                        className={`bugatti-front-light-bulbs-smoke
                                            ${isBugattiFrontLightClick ?
                                                'bugatti-front-light-bulbs-smoke-blows' : ''
                                            }
                                        `}

                                    />

                                ))}

                            </div>

                        </div>

                        <div
                            className={`bugatti-front-light-indicator
                                    ${isBugattiFrontLightClick ?
                                    'bugatti-front-light-indicator-on' : ''
                                }
                                `}
                        />

                        <div className='bugatti-front-bumper'></div>

                        <div
                            onClick={handleBugattiBumperLightClick}

                            className={`
                                    
                                ${isBugattiBumperLightClick ?
                                    'bugatti-front-bumper-light bugatti-front-bumper-light-opened' :
                                    'bugatti-front-bumper-light'}
                                    
                                    ${isBugattiBumperLightClick ?
                                    'bugatti-front-bumper-light-on' : ''
                                }
                                
                                `}
                        />

                        <div className='bugatti-bumper-light-bulbs-smoke-area'>

                            <div className="bugatti-bumper-light-bulbs-smokes">

                                {Array.from({ length: 10 }, (_, index) => (

                                    <div

                                        key={index}

                                        className={`bugatti-front-light-bulbs-smoke
                                                ${isBugattiBumperLightClick ?
                                                'bugatti-front-light-bulbs-smoke-blows' : ''
                                            }
                                        `}

                                    />

                                ))}

                                {Array.from({ length: 8 }, (_, index) => (

                                    <div

                                        key={index}

                                        className={`bugatti-bumper-light-bulbs-smoke
                                                ${isBugattiBumperLightClick ?
                                                'bugatti-bumper-light-bulbs-smoke-blows' : ''
                                            }
                                        `}

                                    />

                                ))}

                            </div>

                        </div>

                        <div className='bugatti-backward-tires'>

                            <div className='bugatti-backward-tire'>
                                <div className='bugatti-tire-rims'>
                                    <div className='bugatti-tire-rims-line-1'></div>
                                    <div className='bugatti-tire-rims-line-2'></div>
                                    <div className='bugatti-tire-rims-line-3'></div>
                                    <div className='bugatti-tire-rims-line-4'></div>
                                    <div className='bugatti-tire-rims-line-5'></div>
                                    <div className='bugatti-tire-rims-line-6'></div>
                                    <div className='bugatti-tire-rims-line-7'></div>
                                    <div className='bugatti-tire-rims-line-8'></div>
                                </div>
                                <div className='bugatti-tire-middle-point'></div>
                            </div>

                            <div className='bugatti-backward-tire'>
                                <div className='bugatti-tire-rims'>
                                    <div className='bugatti-tire-rims-line-1'></div>
                                    <div className='bugatti-tire-rims-line-2'></div>
                                    <div className='bugatti-tire-rims-line-3'></div>
                                    <div className='bugatti-tire-rims-line-4'></div>
                                    <div className='bugatti-tire-rims-line-5'></div>
                                    <div className='bugatti-tire-rims-line-6'></div>
                                    <div className='bugatti-tire-rims-line-7'></div>
                                    <div className='bugatti-tire-rims-line-8'></div>
                                </div>
                                <div className='bugatti-tire-middle-point'></div>
                            </div>

                        </div>

                        <div className='bugatti-front-tires'>

                            <div className='bugatti-front-tire'>
                                <div className='bugatti-tire-rims'>
                                    <div className='bugatti-tire-rims-line-1'></div>
                                    <div className='bugatti-tire-rims-line-2'></div>
                                    <div className='bugatti-tire-rims-line-3'></div>
                                    <div className='bugatti-tire-rims-line-4'></div>
                                    <div className='bugatti-tire-rims-line-5'></div>
                                    <div className='bugatti-tire-rims-line-6'></div>
                                    <div className='bugatti-tire-rims-line-7'></div>
                                    <div className='bugatti-tire-rims-line-8'></div>
                                </div>
                                <div className='bugatti-tire-middle-point'></div>
                            </div>

                            <div className='bugatti-front-tire'>
                                <div className='bugatti-tire-rims'>
                                    <div className='bugatti-tire-rims-line-1'></div>
                                    <div className='bugatti-tire-rims-line-2'></div>
                                    <div className='bugatti-tire-rims-line-3'></div>
                                    <div className='bugatti-tire-rims-line-4'></div>
                                    <div className='bugatti-tire-rims-line-5'></div>
                                    <div className='bugatti-tire-rims-line-6'></div>
                                    <div className='bugatti-tire-rims-line-7'></div>
                                    <div className='bugatti-tire-rims-line-8'></div>
                                </div>
                                <div className='bugatti-tire-middle-point'></div>
                            </div>

                        </div>

                        <div className='bugatti-exhaust-pipes'>

                            {Array.from({ length: 6 }, (_, index) => (

                                <div
                                    key={index}
                                    onClick={() => handleBugattiExhaustPipeClick(index)}
                                    className='bugatti-exhaust-pipe'
                                />

                            ))}

                        </div>

                        {Array.from({ length: 6 }, (_, areaIndex) => (

                            <div key={areaIndex} className={`bugatti-exhaust-pipes-smoke-area-${areaIndex + 1}`}>

                                <div className={`bugatti-exhaust-pipes-smokes-${areaIndex + 1}`}>

                                    {Array.from({ length: 20 }, (_, index) => (

                                        <div
                                            key={index}
                                            className={`bugatti-exhaust-pipes-smoke-${areaIndex + 1} 
                                            ${isBugattiExhaustPipeClick === areaIndex ?
                                                    `bugatti-exhaust-pipes-smoke-${areaIndex + 1}-exploded` : ''}
                                `}
                                        />

                                    ))}

                                </div>

                            </div>

                        ))}

                        <div className='bugatti-back-light' />

                        <div onClick={handleBugattiBackLightClick} className='bugatti-back-light-bulbs'>

                            {Array.from({ length: 4 }, (_, index) => (

                                <div
                                    key={index}
                                    className={`bugatti-back-light-bulb
                                            ${isBugattiBackLightClick ?
                                            'bugatti-back-light-bulb-on' : ''
                                        }
                                        `}
                                />

                            ))}

                        </div>

                        {Array.from({ length: 6 }, (_, areaIndex) => (

                            <div key={areaIndex} className={`bugatti-back-light-bulbs-smoke-area-${areaIndex + 1}`}>

                                <div className={`bugatti-back-light-bulbs-smokes-${areaIndex + 1}
                                            ${isBugattiBackLightClick ?
                                        `bugatti-back-light-bulbs-smokes-${areaIndex + 1}-blows` :
                                        ''
                                    }
                                    `}
                                >

                                    {Array.from({ length: 20 }, (_, index) => (

                                        <div
                                            key={index}
                                            className={`bugatti-back-light-bulbs-smoke-${areaIndex + 1}}
                                            `}
                                        />

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                    <div
                        className={`driver
                        ${isPathToGarageButtonClick && !isPathOfGarageCleared && isLockOpen ?
                                'driver-with-bugatti' : 'driver-with-not-bugatti'
                            }
                        `}
                    >

                        <div className="driver-body">

                            <div className="driver-head">

                                <div className='driver-face'>

                                    <div className="driver-eyebrows">
                                        <div className="driver-eyebrow" />
                                        <div className="driver-eyebrow" />
                                    </div>

                                    <div className="driver-eyes">
                                        <div className="driver-eye" />
                                        <div className="driver-eye" />
                                    </div>

                                    <div className='driver-nose'>

                                        <div className='driver-nose-holes'>
                                            <div className='driver-nose-hole'></div>
                                            <div className='driver-nose-hole'></div>
                                        </div>

                                    </div>

                                    <div className="driver-lips">

                                        <div
                                            className={`driver-lip
                                                    ${isLeftHandClick ? 'driver-moving-lips' : ''}
                                            `} />

                                        <div className='driver-cigarette-inside-smoke-area'>

                                            <div className="driver-cigarette-inside-smokes">

                                                {Array.from({ length: 10 }, (_, index) => (

                                                    <div

                                                        key={index}

                                                        className={`driver-cigarette-inside-smoke
                                                            ${isLeftHandClick ? 'driver-enhaling-cigarette' : ''}    
                                                        `}

                                                    />

                                                ))}

                                            </div>

                                        </div>

                                        <div
                                            className={`driver-lip
                                                    ${isLeftHandClick ? 'driver-moving-lips' : ''}
                                            `} />

                                    </div>

                                </div>

                                <div className="driver-ears">
                                    <div className="driver-ear" />
                                    <div className="driver-ear" />
                                </div>

                            </div>

                            <div className='driver-wearing-objects'>

                                <div className='driver-shirt'>

                                    <div className='driver-hand-belt-1'></div>

                                    <div className='driver-shirt-buttons'>
                                        <div className='driver-shirt-button'></div>
                                        <div className='driver-shirt-button'></div>
                                        <div className='driver-shirt-button'></div>
                                        <div className='driver-shirt-button'></div>
                                        <div className='driver-shirt-button'></div>
                                        <div className='driver-shirt-button'></div>
                                        <div className='driver-shirt-button'></div>
                                        <div className='driver-shirt-button'></div>
                                    </div>

                                    <div className='driver-hand-belt-2'></div>

                                </div>

                                <div className='driver-pant-belt'></div>

                            </div>

                            <div className="driver-right-hand" />

                            <div
                                className={`
                                    ${isLeftHandClick ?
                                        'driver-left-hand move-left-hand move-left-hand-fingers' :
                                        'driver-left-hand'}
                                `}

                                onClick={handleLeftHandClick}>

                                <div
                                    className={`
                                        ${isLeftHandClick ? 'driver-cigarette driver-smoking-cigarette' :
                                            'driver-cigarette'}
                                    `}>

                                    <div className='driver-cigarette-burn-part' />

                                </div>

                            </div>

                            <div className='driver-legs' />

                            <div className='driver-cigarette-outside-smoke-area'>

                                <div className="driver-cigarette-outside-smokes">

                                    {Array.from({ length: 10 }, (_, index) => (

                                        <div
                                            key={index}
                                            className='driver-cigarette-outside-smoke'
                                        />

                                    ))}

                                </div>

                            </div>

                            <div className='driver-shoes'>
                                <div className='driver-shoes-heels' />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Bugatti;