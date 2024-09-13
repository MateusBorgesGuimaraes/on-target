type ErrorProps = {
  message: string | undefined;
};
export const ErrorComponent = ({ message }: ErrorProps) => {
  return (
    <div>
      <h1 className="text-sm text-red-500">
        {message ? message : 'erro inesperado'}
      </h1>
    </div>
  );
};
