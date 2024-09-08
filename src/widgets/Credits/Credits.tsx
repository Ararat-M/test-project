import "./credits.module.scss"
import { nanoid } from "nanoid";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { CREDIT_OFFERS_URL, getData, saveData, sortOptions } from "../../helpers";
import { CreditOffer, sortVariant } from "../../types";
import { List, CustomSelect } from "../../shared/UI";
import { CardCreditOffer } from "../../components/CardCreditOffer";

// сортирует массив
function sortCreditOfferData(sortVariant: sortVariant, dispatch: React.Dispatch<React.SetStateAction<CreditOffer[]>>) {
    if (sortVariant == "less") {
        dispatch((prev) => [...prev].sort((a, b) =>  a.amount - b.amount).reverse())
    } else if (sortVariant == "upward") {
        dispatch((prev) => [...prev].sort((a, b) =>  a.amount - b.amount))
    }
}

// возвращает отфильтрованный массив CreditOffer не изменяя его
function filterCreditOffersData(data: CreditOffer[], minValue: number) {
    return data.filter((value) => value.amount >= minValue)
}

export function Credits() {
    const [amount, setAmount] = useState("");
    const [sortVariant, setSortVariant] = useState<sortVariant>("");
    const [creditOffersData, setCreditOffersData] = useState<CreditOffer[]>([]);

    useEffect(() => {
        getData<CreditOffer[]>(CREDIT_OFFERS_URL, setCreditOffersData);
    }, [])
    
    useEffect(() => {
        sortCreditOfferData(sortVariant, setCreditOffersData)   
    }, [sortVariant, setSortVariant])

    useEffect(() => {
        // сохраняем отсортированный и отфильтрованный в local storage
        saveData("creditOffersData", filterCreditOffersData(creditOffersData, +amount))
    }, [amount, setAmount, creditOffersData, setCreditOffersData])

    return (
        <>
            <Box sx={{p:"1.2rem", borderRadius:"4px", backgroundColor:"#fff"}}>
                <TextField fullWidth id="outlined-basic" label="Сумма кредита" variant="outlined" type="number" aria-details="l" value={amount} onChange={(e) => setAmount(e.currentTarget.value)}/>
            </Box>
            <CustomSelect default="Сортировать по" value={sortVariant} setValue={setSortVariant} options={sortOptions}/>
            <List style={{ display: "flex", flexDirection: "column", rowGap: "15px"} }
                items={filterCreditOffersData(creditOffersData, +amount)}
                renderItem={(offer: CreditOffer) => <li key={nanoid()}><CardCreditOffer amount={offer.amount} name={offer.name} logo={offer.logo}/></li>}
            />
        </>
    )
}