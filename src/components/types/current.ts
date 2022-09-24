export type CurrentCardProps = {
  title: string;
  cardBgColor: string;
  cardTextColor: string;
  cardBorderColor: string;
  dataList: CardItemProps[];
};

export interface CardItemProps {
  title: string;
  value: number | null;
  measureUnit: string | null;
}
