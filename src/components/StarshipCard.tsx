import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";

interface StarshipCardProps {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
}

export function StarshipCard({
  name,
  model,
  crew,
  hyperdrive_rating,
  cost_in_credits,
}: StarshipCardProps) {
  return (
    <Card>
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>
          Model : {model} {"\n"}
          Crew : {crew} {"\n"}
          Hyperdriving rating : {hyperdrive_rating} {"\n"}
          Price : {cost_in_credits} ¤
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "" }} />
    </Card>
  );
}
