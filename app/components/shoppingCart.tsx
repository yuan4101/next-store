'use client';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Drawer, IconButton, List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { useMemo } from 'react';

export default function ShoppingCart() {
  const {
    cartItems,
    cartCount,
    isCartOpen,
    toggleCart,
    //removeFromCart,
    updateQuantity
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Crear el mensaje de WhatsApp personalizado
  const whatsappMessage = useMemo(() => {
    const productDetails = cartItems
      .map(
        (item) =>
          `*${item.name}* (Cantidad: ${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}`
      )
      .join('\n');

    return `Hola, me gustaría hacer un pedido. Aquí están los detalles de mi carrito:\n\n${productDetails}\n\nTotal: $${total.toLocaleString()}`;
  }, [cartItems, total]);

  // Enlace de WhatsApp con el mensaje personalizado
  const whatsappLink = `https://wa.me/573212812666?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex items-center">
      <IconButton onClick={toggleCart}>
        <Badge badgeContent={cartCount} sx={{
          '& .MuiBadge-badge': {
          backgroundColor: '#F4611E', // tu color hex personalizado
          color: 'white',             // color del texto dentro del badge
          }
        }}>
          <ShoppingCartIcon sx={{ color: 'white' }}/>
        </Badge>
      </IconButton>

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={toggleCart}
        sx={{
          width: '350px',
          '& .MuiDrawer-paper': {
            width: '350px',
            padding: '20px',
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Carrito de Compras
        </Typography>
        
        {cartItems.length === 0 ? (
          <Typography>Tu carrito está vacío</Typography>
        ) : (
          <>
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id} divider>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}  // Añade un ancho fijo
                    height={64} // Añade una altura fija
                    className="object-cover mr-3"
                  />
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price.toLocaleString()} x ${item.quantity}`}
                  />
                  <div className="flex items-center">
                    <Button 
                      size="small" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button 
                      size="small" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </ListItem>
              ))}
            </List>
            
            <Typography variant="h6" className="mt-4">
              Total: ${total.toLocaleString()}
            </Typography>
            
            <Button
              component="a"
              href={whatsappLink} // Enlace de WhatsApp
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
              disabled={cartItems.length === 0} // Deshabilitar si el carrito está vacío
            >
              Ordenar
            </Button>
          </>
        )}
        
        <Button 
          onClick={toggleCart} 
          className="mt-4"
        >
          Cerrar
        </Button>
      </Drawer>
    </div>
  );
}
