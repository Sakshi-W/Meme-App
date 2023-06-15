import react from 'react';
import styles from './style.module.css';
import {useHistory, useLocation} from 'react-router-dom';

export const MemeGenerated = () => {
    
    const clipboard = useClipboard();
    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');
    
    const copyLink = () =>{
        clipbpoard.copy(url);
        setCopied(true);
    };

    return(<div className={styles.container}>
        <button onClick={()=>history.push('/')} className={styles.home}>
           Make More Memes
        </button>
        {url && <img alt='meme' src={url} />}
        <button onClick={copyLink} className={styles.copy}> 
        {copied ? 'link copied!': 'copy link'}
        </button>
    </div>);
};