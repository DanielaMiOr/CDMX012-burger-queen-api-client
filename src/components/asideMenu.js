
import { Drawer, Box, IconButton } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Order from "./Order";



export default function AsideMenu(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { order} = props

  // const [number, setNumber] = useState();
  // const [name, setName] = useState();


  // const OrderNumber = (event) => {
  //   setNumber(event.target.value)

  // }
  // console.log(OrderNumber)
  // const ClientName = (event) => {
  //   setName(event.target.value)
  // }
  return (
    <aside className="aside">
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <section className="countAndCart">
          <p>32</p>
          <ShoppingCartIcon id="shopping" sx={{ fontSize: 50 }} />
        </section>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="400px" role="presentation" textAlign="center" sx={{
          backgroundColor: 'primary.dark', width: 400, height: 1000
        }}>
          <header>
            <img
              className="icons"
              alt="clockIcon"
              src={require("../assets/Clock.png")}
            />
            <p>Fecha del dia</p>
            <p>Hora</p>
            <p>Rol y nombre</p>
            <hr />
          </header>
          <section>
            <input
              type="orderNum"
              className="inputOrder"
              placeholder="Order num:"
              autoComplete="off"
            />
            <input
              type="orderName"
              className="inputOrder"
              placeholder="Client name:"
              autoComplete="off"

            />
            <button>Save</button>
          </section>
          <section className="allOrders">
            {order.products && order.products.map((product) => {
              return (
                <Order
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  qty={product.qty}
                ></Order>
              );
            })}
            <p>Total:$...</p>



          </section>
          <button>Process Order</button>
          {/* <Typography variant="h6" component="div">
            Side Panel
          </Typography> */}
        </Box>
      </Drawer>
    </aside>
  );
}
