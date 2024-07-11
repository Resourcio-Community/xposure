import { initializeApp, cert, getApp, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "./serviceAccount.json";
import { ServiceAccount } from "firebase-admin/app";

const serviceAccountTyped: ServiceAccount = serviceAccount as ServiceAccount;

const app = !getApps().length
	? initializeApp({
			credential: cert(serviceAccountTyped),
		})
	: getApp();

const auth = getAuth(app);

export { auth };
