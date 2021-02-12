import admin from "firebase-admin";

const authentication = async (req: any, res: any, next: any) => {
	const { authorization } = req.headers;
	if (!authorization) return res.status(401).send({ message: "Unauthorized" });

	if (!authorization.startsWith("Bearer"))
		return res.status(401).send({ message: "Unauthorized" });

	const split = authorization.split("Bearer ");
	if (split.length !== 2)
		return res.status(401).send({ message: "Unauthorized" });

	const token = split[1];

	try {
		const decodedToken = await admin.auth().verifyIdToken(token);
		res.locals = { ...res.locals, uid: decodedToken.uid };
		return next();
	} catch (error) {
		console.log(error.message);
		return res.status(401).send({ message: "Unauthorized" });
	}
};

export { authentication };
