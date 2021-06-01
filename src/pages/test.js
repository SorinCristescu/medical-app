import Input from '../components/ui/Input';

const Test = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
      }}
    >
      <h1>Test page</h1>
      <Input label="First Name" name="first_name" />
    </div>
  );
};

export default Test;
