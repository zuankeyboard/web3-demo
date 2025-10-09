import React from "react";
import { ConnectButton, Connector, useAccount } from "@ant-design/web3";
import { useSignMessage } from "wagmi";
import { message, Space, Button } from "antd";

const SignDemo: React.FC = () => {
  const { signMessageAsync } = useSignMessage();
  const { account } = useAccount();

  const doSignature = async () => {
    try {
      const signature = await signMessageAsync({
        message: "test message for WTF-DApp demo",
      });
    } catch (error: any) {
      message.error(`Signature failed: ${error.message}`);
    }
  };
  return (
    <Space>
      <Connector>
        <ConnectButton />
      </Connector>
      <Button
        disabled={!account?.address}
        onClick={doSignature}
      >
        Sign message
      </Button>
    </Space>

  );
};
export default SignDemo;