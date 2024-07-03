import { Breadcrumbs, Item, ActionButton, Tooltip, TooltipTrigger, Button, Cell, Column, Row, TableView, TableBody, TableHeader } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';


const Airports = () => {


  return (
    <>
      <section className="w-[1400px] h-[272px] px-6 py-4">
        <div className='flex flex-row justify-between p-4'>
          <Breadcrumbs marginTop={7} marginBottom={10}>
            <Item key="airports">Airports</Item>
          </Breadcrumbs>
          <div>
            <Button variant="primary" style="fill">Add new</Button>
          </div>
        </div>
        <TableView
          aria-label="Example table with static contents"
          selectionMode="multiple"
        >
          <TableHeader>
            <Column maxWidth={1001}>
              <div className="flex flex-row gap-2">
                <div>All Airports</div>
                <div>
                  <svg
                    className="relative top-[0.75px]"
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_186_329)">
                      <path
                        d="M5.63618 11.65L8.76118 8.573C8.84819 8.49373 8.91831 8.39772 8.96734 8.29071C9.01637 8.18371 9.04331 8.06791 9.04654 7.95025C9.04978 7.83259 9.02924 7.71549 8.98616 7.60595C8.94308 7.49642 8.87834 7.3967 8.79582 7.31277C8.71331 7.22883 8.6147 7.16241 8.50591 7.11748C8.39712 7.07254 8.28039 7.05002 8.16269 7.05126C8.04499 7.05249 7.92876 7.07746 7.82093 7.12467C7.71311 7.17188 7.61592 7.24035 7.53518 7.326L5.89818 8.936V2.875C5.89818 2.64294 5.806 2.42038 5.6419 2.25628C5.47781 2.09219 5.25525 2 5.02318 2C4.79112 2 4.56856 2.09219 4.40447 2.25628C4.24037 2.42038 4.14818 2.64294 4.14818 2.875V8.937L2.51118 7.327C2.43045 7.24135 2.33326 7.17288 2.22544 7.12567C2.11761 7.07846 2.00138 7.05349 1.88368 7.05226C1.76598 7.05102 1.64925 7.07354 1.54046 7.11848C1.43167 7.16341 1.33306 7.22983 1.25054 7.31377C1.16803 7.3977 1.10329 7.49742 1.06021 7.60695C1.01713 7.71649 0.99659 7.83359 0.999824 7.95125C1.00306 8.06891 1.03 8.18471 1.07903 8.29171C1.12806 8.39872 1.19818 8.49473 1.28518 8.574L4.41018 11.649C4.57367 11.8099 4.79383 11.9 5.02318 11.9C5.25254 11.9 5.4727 11.8099 5.63618 11.649V11.65Z"
                        fill="#6D6D6D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_186_329">
                        <rect
                          width="12"
                          height="10"
                          fill="white"
                          transform="matrix(0 1 -1 0 10 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Column>
            <Column maxWidth={240}>Country</Column>
            <Column maxWidth={80}>Code</Column>
            <Column maxWidth={100} align="end">
              Terminals
            </Column>
            <Column align="end" maxWidth={100}></Column>
          </TableHeader>
          <TableBody>
            <Row>
              <Cell>Indra Gandhi International Airport</Cell>
              <Cell>India</Cell>
              <Cell>DEL</Cell>
              <Cell>3</Cell>
              <Cell>
                <TooltipTrigger>
                  <ActionButton aria-label="Edit Name" isQuiet>
                    <Edit />
                  </ActionButton>
                  <Tooltip>Change Name</Tooltip>
                </TooltipTrigger>
                <TooltipTrigger>
                  <ActionButton aria-label="Danger Will Robinson" isQuiet>
                    <Delete />
                  </ActionButton>
                  <Tooltip variant="negative" showIcon>
                    Dangerous action.
                  </Tooltip>
                </TooltipTrigger>
              </Cell>
            </Row>
            <Row>
              <Cell>Dubai International Airport</Cell>
              <Cell>UAE</Cell>
              <Cell>DXB</Cell>
              <Cell>5</Cell>
              <Cell>
                <TooltipTrigger>
                  <ActionButton aria-label="Edit Name" isQuiet>
                    <Edit />
                  </ActionButton>
                  <Tooltip>Change Name</Tooltip>
                </TooltipTrigger>
                <TooltipTrigger>
                  <ActionButton aria-label="Danger Will Robinson" isQuiet>
                    <Delete />
                  </ActionButton>
                  <Tooltip variant="negative" showIcon>
                    Dangerous action.
                  </Tooltip>
                </TooltipTrigger>
              </Cell>
            </Row>
            <Row>
              <Cell>Heathrow Airport</Cell>
              <Cell>England</Cell>
              <Cell>LHR</Cell>
              <Cell>6</Cell>
              <Cell>
                <TooltipTrigger>
                  <ActionButton aria-label="Edit Name" isQuiet>
                    <Edit />
                  </ActionButton>
                  <Tooltip>Change Name</Tooltip>
                </TooltipTrigger>
                <TooltipTrigger>
                  <ActionButton aria-label="Danger Will Robinson" isQuiet>
                    <Delete />
                  </ActionButton>
                  <Tooltip variant="negative" showIcon>
                    Dangerous action.
                  </Tooltip>
                </TooltipTrigger>
              </Cell>
            </Row>
            <Row>
              <Cell>Istanbul Airport</Cell>
              <Cell>Turkey</Cell>
              <Cell>IST</Cell>
              <Cell>3</Cell>
              <Cell>
                <TooltipTrigger>
                  <ActionButton aria-label="Edit Name" isQuiet>
                    <Edit />
                  </ActionButton>
                  <Tooltip>Change Name</Tooltip>
                </TooltipTrigger>
                <TooltipTrigger>
                  <ActionButton aria-label="Danger Will Robinson" isQuiet>
                    <Delete />
                  </ActionButton>
                  <Tooltip variant="negative" showIcon>
                    Dangerous action.
                  </Tooltip>
                </TooltipTrigger>
              </Cell>
            </Row>
            <Row>
              <Cell>Rajiv Gandhi International Airport</Cell>
              <Cell>Texas</Cell>
              <Cell>DFW</Cell>
              <Cell>14</Cell>
              <Cell>
                <TooltipTrigger>
                  <ActionButton aria-label="Edit Name" isQuiet>
                    <Edit />
                  </ActionButton>
                  <Tooltip>Change Name</Tooltip>
                </TooltipTrigger>
                <TooltipTrigger>
                  <ActionButton aria-label="Danger Will Robinson" isQuiet>
                    <Delete />
                  </ActionButton>
                  <Tooltip variant="negative" showIcon>
                    Dangerous action.
                  </Tooltip>
                </TooltipTrigger>
              </Cell>
            </Row>
          </TableBody>
        </TableView>
      </section>
    </>
  );
};

export default Airports;
