import React, { useMemo } from "react";
import CheckItem from "../../CheckItem/CheckItem";
import Heading from "../../Heading";
import Text from "../../Text";
import { CheckItemsContainer, Container } from "./styles";

const HeaderContent = () => {
  const items = useMemo(
    () => [
      { key: 1, label: "99,9% de disponibilidade: seu site sempre no ar" },
      { key: 2, label: "Suporte 24h, todos os dias" },
      { key: 3, label: "Painel de Controle cPanel" }
    ],
    []
  );

  return (
    <Container>
      <Text
        size="lg"
        color="blue"
        colorVariation={100}
        margin="xs"
        lineHeight="lg"
        letterSpacing
      >
        Hospedagem de Sites
      </Text>
      <Heading
        size="xl"
        fontWeight="bold"
        textAlign="center"
        lineHeight="xxl"
        margin="xl"
        color="white"
      >
        Tenha uma hospedagem de sites estável e evite perder visitantes
        diariamente
      </Heading>
      <CheckItemsContainer>
        {items.map(({ key, label }) => (
          <CheckItem key={key} label={label} />
        ))}
      </CheckItemsContainer>
    </Container>
  );
};

export default React.memo(HeaderContent);
