import styles from "./styles.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

// import {FB, FacebookApiException} from 'fb';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	
	const handlefblogin = ()=>{

	}
	

//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '5492451957487992',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v2.4'
//     });
      
//     FB.AppEvents.logPageView();   
      
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));


	return (
		<><div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>facebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		
		
		</div>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Facebook Page Integration</h1>
						
						
						<button type="submit" className={styles.green_btn}>
							Conenct Page
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>Already Signed In?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Delete Integration
						</button>
					</Link><br></br>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Reply To Messages
						</button>
					</Link>
				</div>
			</div>
		</div>
		</>
	);
};

export default Main;