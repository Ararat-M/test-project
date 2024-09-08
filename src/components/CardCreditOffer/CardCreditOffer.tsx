
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CreditOffer } from "../../types";

interface CardCreditOfferProps extends CreditOffer {

}

export function CardCreditOffer(props: CardCreditOfferProps) {
    return (
        <Card>
            <CardActionArea>
                <CardContent sx={{
                    display: "grid",
                    gridTemplateColumns: "fit-content(50px)",
                    gap: "10px 10px"
                }}>
                    <img style={{ gridColumnStart: 1, gridColumnEnd: 2} } width={45} height={45} src={props.logo} alt="logo" />

                    <Typography fontWeight={600} sx={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
                        {props.name}
                    </Typography>

                    <Typography fontWeight={400} color={grey[600]} sx={{ gridColumnStart: 1, gridColumnEnd: 2, }}>
                        сумма
                    </Typography>

                    <Typography fontWeight={600} sx={{ gridColumnStart: 2, gridColumnEnd: 3, justifySelf: "end", alignSelf: "center"}}>
                        {props.amount.toLocaleString("ru")} ₽
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}