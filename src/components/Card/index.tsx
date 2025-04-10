import CardContent from './components/CardContent';
import CardCore from './components/CardCore';
import CardFooter from './components/CardFooter';
import CardHeader from './components/CardHeader';
import CardTitle from './components/CardTitle';
import { ICard } from './type';

const Card = ({ content, className, footer, icon, title }: ICard) => {
  return (
    <CardCore className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <h2>{content}</h2>
      </CardContent>
      <CardFooter>{footer}</CardFooter>
    </CardCore>
  );
};

export default Card;
