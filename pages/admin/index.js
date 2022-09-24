import React from "react";
import { Button, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";

const adminStyles = `
.title {
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
}

.wrapper {
  padding: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
}
.container {
  margin: 50px auto;
}

.btn-wrapper {
  width: 250px; 
  margin: 0 auto;
}

.green {
  color: #69b67c;
}

.done-txt {
  text-align: center;
}
`;

export default function AdminPage() {
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const triggerDeploy = () => {
    setLoading(true);
    fetch(process.env.NEXT_PUBLIC_VERCEL_DEPLOY_HOOK_URL).then((res) => {
      console.log(res);
      if (res.ok) {
        setLoading(false);
        setDone(true);
      }
    });
  };

  return (
    <React.Fragment>
      <>
        <h2 className="title">Vyreca Creations Admin</h2>
        <div className="wrapper">
          <Button className="btn-wrapper" onClick={triggerDeploy}>
            Redéployer le site
          </Button>
          {loading && (
            <div className="container">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="orange.500"
                size="xl"
              />
            </div>
          )}

          {done && (
            <div className="container green">
              <Text className="done-txt" fontSize="2xl">
                C'est fait ! Votre demande est en cours. Rafraichissez le site
                dans environ 5 minutes.
              </Text>
            </div>
          )}
        </div>
        <a style={{ display: "flex", justifyContent: "center" }} href="/">
          Retourner sur vyrecacreations.fr
        </a>
      </>
      <style jsx>{adminStyles}</style>
    </React.Fragment>
  );
}
