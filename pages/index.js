import { Card, Grid, Row, Text, Navbar, Button, Link } from '@nextui-org/react';

export default function Home() {
  const list = [
    {
      title: 'Orange',
      img: '/images/fruit-1.jpeg',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: '/images/fruit-2.jpeg',
      price: '$3.00',
    },
    {
      title: 'Cherry',
      img: '/images/fruit-3.jpeg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: '/images/fruit-4.jpeg',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: '/images/fruit-5.jpeg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: '/images/fruit-6.jpeg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: '/images/fruit-7.jpeg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: '/images/fruit-8.jpeg',
      price: '$12.20',
    },
  ];

  return (
    <>
      <Navbar isBordered variant='floating'>
        <Navbar.Brand>
          <Text b color='inherit' hideIn='xs'>
            Test App
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn='xs' variant='highlight-rounded'>
          <Navbar.Link href='#'>Features</Navbar.Link>
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href='http://localhost:3000/auth'>
              Login
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Grid.Container gap={2} justify='center'>
        {list.map((item, index) => (
          <Grid xs={6} sm={2.5} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={'https://nextui.org' + item.img}
                  objectFit='cover'
                  width='100%'
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: 'flex-start' }}>
                <Row wrap='wrap' justify='space-between' align='center'>
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: '$accents7',
                      fontWeight: '$semibold',
                      fontSize: '$sm',
                    }}
                  >
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
