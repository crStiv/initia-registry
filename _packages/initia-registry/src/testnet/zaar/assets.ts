import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "zaar",
  assets: [
    {
      description: "Fake ZAAR Token",
      denom_units: [
        {
          denom: "evm/6ed1637781269560b204c27Cd42d95e057C4BE44",
          exponent: 0,
        },
        {
          denom: "fZAAR",
          exponent: 18,
        },
      ],
      type_asset: "erc20",
      address: "0x6ed1637781269560b204c27Cd42d95e057C4BE44",
      base: "evm/6ed1637781269560b204c27Cd42d95e057C4BE44",
      display: "fZAAR",
      name: "Fake Zaar",
      symbol: "fZAAR",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
      },
    },
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/a7add6c5aed49e3f4afa45e63f6fdba01fa5be2d1bf6a5b225d0bec9e9e34988",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/a7add6c5aed49e3f4afa45e63f6fdba01fa5be2d1bf6a5b225d0bec9e9e34988",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "612",
          },
        },
      ],
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/INIT.svg",
      },
    },
    {
      description: "The fake USDC",
      denom_units: [
        {
          denom:
            "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
      display: "USDC",
      name: "USDC",
      symbol: "USDC",
      coingecko_id: "",
      traces: [
        {
          type: "ibc",
          counterparty: {
            chain_name: "initia",
            base_denom: "uusdc",
            channel_id: "channel-0",
          },
          chain: {
            channel_id: "channel-0",
            path: "transfer/channel-0/uusdc",
          },
        },
      ],
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
          svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.png",
        svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/initia/images/USDC.svg",
      },
    },
  ],
};
export default info;
