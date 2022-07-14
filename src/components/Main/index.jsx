import styles from "./styles.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	
	const handlefblogin = ()=>{

	}

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>facebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Box component="span"  sx={{ p: 6, border: '1px dashed grey' }}>
      <Button className={styles.white_btn} onClick={handlefblogin}>Connect with Facebook</Button>
    </Box>
		</div>
	);
};

export default Main;