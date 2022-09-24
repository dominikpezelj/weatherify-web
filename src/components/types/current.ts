export type CurrentCardProps = {
  title: string;
  cardBgColor: string;
  cardTextColor: string;
  cardBorderColor: string;
  dataList: CardItemProps[];
  windDegree?: number;
};

export interface CardItemProps {
  title: string;
  value: number | null;
  measureUnit: string | null;
}
