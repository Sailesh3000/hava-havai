import React from "react";
import "@spectrum-web-components/card/sp-card.js";
import { Button } from "@adobe/react-spectrum";
import {
  AlertDialog,
  DialogTrigger,
} from "@adobe/react-spectrum";
import Services from "./Services";

const Terminals = () => {
  return (
    <>
      <section className="w-[1400px] px-2 py-8 flex gap-8">
        <div className="spectrum-Card spectrum-Card--horizontal flex flex-row gap-3 w-[280px] h-[106px] border-2 border-[#147AF3] rounded justify-between">
          <div className="spectrum-Card-preview">
            <img
              className="w-[104px] h-[104px] rounded"
              src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-wrap gap-1">
            <div className="spectrum-Card-header pr-4 mr-8">
              <div className="font-bold text-l mt-3 mr-8">Terminal 1</div>
            </div>
            <div className="pr-4 mr-8 w-[135px] h-[40px] flex flex-wrap">
              <div className=" mr-8">Optional two lines</div>
            </div>
          </div>
        </div>
        <div className="spectrum-Card spectrum-Card--horizontal flex flex-row gap-3 w-[280px] h-[106px] border-2 rounded justify-between">
          <div className="spectrum-Card-preview">
            <img
              className="w-[103px] h-[103px] rounded"
              src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-wrap gap-1">
            <div className="spectrum-Card-header pr-4 mr-8">
              <div className="font-bold text-l mt-3 mr-8">Terminal 1</div>
            </div>
            <div className="pr-4 mr-8 w-[135px] h-[40px]">
              <div className=" mr-8">Optional two lines </div>
            </div>
          </div>
        </div>
        <div className="mt-8 h-[50px]">
          <DialogTrigger>
            <Button variant="primary" style="outline">
                +Add Terminal
            </Button>
            <AlertDialog
              variant="confirmation"
              title="Terminal"
              primaryActionLabel="Continue"
              secondaryActionLabel="upload image"
              cancelLabel="Cancel"
              autoFocusButton="primary"
            >
              Description
            </AlertDialog>
          </DialogTrigger>
        </div>
      </section>
      <h1 className="px-2 py-2 font-bold text-2xl">Services</h1>
      <div className="px-2 py-4 w-[1400px] h-[48px] border-b-2 text-[14px]">
        Lost & found
      </div>
      <Services />
      <div className="px-2 py-4 w-[1400px] h-[49px] border-b-2 text-[14px]">
        Lounge
      </div>
      <div className="px-2 py-4 w-[1400px] h-[49px] border-b-2 text-[14px]">
        Money Exchange
      </div>
    </>
  );
};

export default Terminals;
