import {TextField} from '@adobe/react-spectrum'
import {Picker, Item, Section , Text , Button , Switch} from '@adobe/react-spectrum'
import Upload from '@spectrum-icons/workflow/Share'

const Services = () => {
  return (
    <div className="flex flex-col gap-2 px-2 py-8">
      <div className="flex flex-row gap-8">
        <div>
          <TextField
            label="Service name"
            defaultValue="Lost and Found"
            isReadOnly
          />
        </div>
        <div className="w-[176px] h-[57px]">
          <Picker label="Category 1" maxWidth={176} height={33}>
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Picker>
        </div>
        <div className="w-[176px] h-[57px]">
          <Picker label="Category 2" maxWidth={176} height={33}>
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Picker>
        </div>
        <div className='py-6'>
          <Button variant="secondary" style='fill'>
            <Upload />
            <Text>upload image</Text>
          </Button>
        </div>
        <div className='py-6'>
        <Switch>Show image</Switch>
        </div>
      </div>
      <div>
        <div>
          <TextField
            label="Description"
            defaultValue="type here"
            isReadOnly
            minWidth={399}
          />
        </div>
      </div>
    </div>
  );
}

export default Services