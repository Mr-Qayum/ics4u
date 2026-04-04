import { Button } from '@/components/Button';

type ButtonGroupProps = {
  value: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onClick: (value: string) => void;
};

export const ButtonGroup = ({ value, options, onClick }: ButtonGroupProps) => {
  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <Button key={option.value} onClick={() => onClick(option.value)} variant={value === option.value ? 'primary' : 'grey'}>
          {option.label}
        </Button>
      ))}
    </div>
  );
};
