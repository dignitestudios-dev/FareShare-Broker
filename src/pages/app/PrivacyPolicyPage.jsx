import React, { useState, useEffect } from "react";
import api from "../../api/apiInterceptor";

const PrivacyPolicyPage = () => {
  // Privacy:
  const [privacy, setPrivacy] = useState(null);

  const getPrivacy = async () => {
    const privacy = await api.get("/policy/privacy");
    console.log(privacy);
  };

  useEffect(() => {
    getPrivacy();
  }, []);
  return (
    <div class="w-full h-full overflow-y-auto flex flex-col justify-start items-start gap-2">
      <h1 class="text-[36px] font-bold leading-[48.6px] text-black">
        Privacy Policy
      </h1>
      <span class="text-[13px] text-gray-500 font-normal">
        Effective From: 02/12/2024
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
      <span class="text-[15px] font-normal">
        Lorem ipsum dolor sit amet consectetur. Tellus ornare viverra arcu at
        gravida sed. Bibendum egestas tellus sollicitudin tortor porta arcu
        morbi. Aliquam quis feugiat nam accumsan. Viverra pellentesque mattis
        leo malesuada quis tortor pellentesque mauris a. Nec nulla tortor non
        egestas porta. Sit ut egestas ipsum quisque. Ullamcorper vulputate
        integer malesuada in tincidunt sed arcu. Nunc feugiat ultricies enim
        adipiscing maecenas amet diam metus diam. Amet magna id amet aliquet
        molestie. Purus enim venenatis integer adipiscing morbi. Tempus
        malesuada accumsan ornare quam elit tellus. Eros tellus imperdiet massa
        a. Quis odio non sapien molestie sit.
      </span>
    </div>
  );
};

export default PrivacyPolicyPage;