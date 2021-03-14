//console.log(process.env.NODE_ENV === "development" ? "ESTOU EM DESENVOLVIMETO" : "CUIDADO! ESTOU EM PRODUÇÃO")

if(process.env.NODE_ENV !== "development"){   
    throw new Error("CUIDADO! ESTOU EM PRODUÇÃO")
}